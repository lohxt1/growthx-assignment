// Useful Resources
// - https://github.com/acywatson/glyf (suggested by official lexical docs)
// - https://github.com/facebook/lexical/tree/main/packages/lexical-playground

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { ListNode, ListItemNode } from "@lexical/list";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import { HashtagNode } from "@lexical/hashtag";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode, HeadingNode } from "@lexical/rich-text";
import { useEffect, useState } from "react";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";
import {
  BoldIcon,
  Highlighter,
  ItalicIcon,
  ListIcon,
  ListOrdered,
  Underline,
} from "lucide-react";
import { $isRangeSelection, $getSelection, type TextFormatType } from "lexical";

const theme = {
  heading: {
    h1: "TextEditorTheme__h1",
    h2: "TextEditorTheme__h2",
    h3: "TextEditorTheme__h3",
    h4: "TextEditorTheme__h4",
    h5: "TextEditorTheme__h5",
    h6: "TextEditorTheme__h6",
  },
  text: {
    bold: "TextEditorTheme__textBold",
    italic: "TextEditorTheme__textItalic",
    underline: "TextEditorTheme__textUnderline",
    strikethrough: "TextEditorTheme__textStrikethrough ",
    underlineStrikethrough: "TextEditorTheme__textUnderlineStrikethrough",
    highlight: "TextEditorTheme__hashtag",
  },
  list: {
    checklist: "TextEditorTheme__checklist",
    listitem: "TextEditorTheme__listItem",
    listitemChecked: "TextEditorTheme__listItemChecked",
    listitemUnchecked: "TextEditorTheme__listItemUnchecked",
    nested: {
      listitem: "TextEditorTheme__nestedListItem",
    },
    olDepth: [
      "TextEditorTheme__ol1",
      "TextEditorTheme__ol2",
      "TextEditorTheme__ol3",
      "TextEditorTheme__ol4",
      "TextEditorTheme__ol5",
    ],
    ul: "TextEditorTheme__ul",
  },
};

const valueInit = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

function HeadingToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const headingTags: HeadingTag[] = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const onClick = (tag: HeadingTag): void => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(tag));
      }
    });
  };

  return (
    <div className="flex flex-row gap-2 relative border-r border-sh-three p-2 py-1">
      <select
        onChange={(e) => {
          if (e.target.value.length > 0) {
            onClick(e.target.value as HeadingTag);
          }
        }}
        className="w-[100px] p-2 bg-transparent cursor-pointer"
      >
        <option
          value={""}
          className="pointer-events-none hover:bg-transparent p-2 w-[30px] opacity-30 cursor-none"
        >
          Heading
        </option>
        <hr />
        {headingTags.map((tag) => (
          <option
            key={tag}
            className="cursor-pointer text-[17px] px-4 w-[30px]"
            value={tag}
          >
            {tag.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextFormatToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const getIcon = (format: TextFormatType): JSX.Element | null => {
    switch (format) {
      case "bold":
        return <BoldIcon className="w-[20px] h-[20px]" />;
      case "italic":
        return <ItalicIcon className="w-[20px] h-[20px]" />;
      case "underline":
        return <Underline className="w-[20px] h-[20px]" />;
      case "highlight":
        return <Highlighter className="w-[20px] h-[20px]" />;
      default:
        return null;
    }
  };
  const onClick = (format: TextFormatType): void => {
    editor.update(() => {
      try {
        const selection = $getSelection();
        let selectedText = selection?.getTextContent();
        if (format == "highlight" && selectedText && selectedText[0] !== "#") {
          return;
        }
        if ($isRangeSelection(selection)) {
          selection.formatText(format);
        }
      } catch (err) {
        console.error("error while formatting", err);
      }
    });
  };
  const supportedTextFormats: TextFormatType[] = [
    "bold",
    "italic",
    "underline",
    "highlight",
  ];
  return (
    <>
      {supportedTextFormats.map((format) => (
        <div
          key={format}
          onClick={(e) => {
            e.preventDefault();
            onClick(format);
          }}
          className="cursor-pointer"
        >
          {getIcon(format)}
        </div>
      ))}
    </>
  );
}

function OnChangePlugin({ onChange }: { onChange: (v: any) => void }) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    const removeTransform = editor.registerNodeTransform(
      HashtagNode,
      (textNode) => {
        if (!textNode.hasFormat("highlight")) {
          textNode.toggleFormat("highlight");
        }
      }
    );

    const removeEditorChange = editor.registerUpdateListener(
      ({ editorState }) => {
        onChange(editorState);
      }
    );

    return () => {
      removeTransform();
      removeEditorChange();
    };
  }, [editor, onChange]);
  return null;
}

function ListToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onClick = (tag: "ol" | "ul"): void => {
    if (tag === "ol") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
      return;
    }
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };
  return (
    <div className="flex flex-row gap-2 relative border-l border-sh-three p-2 py-1">
      <div
        onClick={() => {
          onClick("ol");
        }}
        className="cursor-pointer"
      >
        <ListOrdered className="w-[20px] h-[20px]" />
      </div>
      <div
        onClick={() => {
          onClick("ul");
        }}
        className="cursor-pointer"
      >
        <ListIcon className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
}

const FreeTextInput = ({
  id,
  value,
  className = "",
  placeholder = "Start typing here...",
}: {
  id: string;
  value?: string | null;
  className?: string;
  placeholder?: string;
}) => {
  const initialConfig = {
    namespace: "Free text editor",
    onError: (error: Error) => {
      throw error;
    },
    theme,
    editorState: value || JSON.stringify(valueInit),
    nodes: [ListNode, ListItemNode, HeadingNode, HashtagNode],
  };

  const [editorState, setEditorState] = useState(
    value || JSON.stringify(valueInit)
  );

  const onChange = (_editorState: any) => {
    const editorStateJSON = _editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
  };

  return (
    <div
      className={`relative gap-y-2 flex flex-col w-full mb-14 border border-sh-one rounded-lg p-1 min-h-[50px] ${className}`}
      key={`editor-${id}`}
    >
      <LexicalComposer
        initialConfig={initialConfig}
        key={`editor-composer-${id}`}
      >
        <div className="flex flex-row gap-2 absolute bottom-[-50px] left-0 border border-sh-three rounded-lg p-2 py-1 bg-bg-zero items-center text-sm">
          <HeadingToolbarPlugin />
          <TextFormatToolbarPlugin />
          <ListToolbarPlugin />
        </div>
        <ListPlugin />
        <HashtagPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className="contentEditable" />}
          placeholder={
            <div className="absolute top-0 left-0 pointer-events-none opacity-50">
              {placeholder}
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
      </LexicalComposer>
      <input type="hidden" value={editorState} name={id} />
    </div>
  );
};

export default FreeTextInput;
