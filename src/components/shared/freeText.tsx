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
import { useEffect, useState } from "react";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";
import {
  BoldIcon,
  ItalicIcon,
  ListIcon,
  ListOrdered,
  Underline,
} from "lucide-react";
import { $isRangeSelection, $getSelection, type TextFormatType } from "lexical";

const theme = {
  text: {
    bold: "TextEditorTheme__textBold",
    italic: "TextEditorTheme__textItalic",
    underline: "TextEditorTheme__textUnderline",
    strikethrough: "TextEditorTheme__textStrikethrough ",
    underlineStrikethrough: "TextEditorTheme__textUnderlineStrikethrough",
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

function TextFormatToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const getIcon = (format: TextFormatType): JSX.Element | null => {
    switch (format) {
      case "bold":
        return <BoldIcon />;
      case "italic":
        return <ItalicIcon />;
      case "underline":
        return <Underline />;
      default:
        return null;
    }
  };
  const onClick = (format: TextFormatType): void => {
    editor.update(() => {
      try {
        const selection = $getSelection();
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
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
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
    <div className="flex flex-row gap-2 relative border-l border-sh-three  p-2 py-1">
      <div
        onClick={() => {
          onClick("ol");
        }}
      >
        <ListOrdered />
      </div>
      <div
        onClick={() => {
          onClick("ul");
        }}
      >
        <ListIcon />
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
    nodes: [ListNode, ListItemNode],
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
      className={`relative gap-y-2 flex flex-col w-full mb-14 border border-sh-one rounded-lg p-1 ${className}`}
      key={`editor-${id}`}
    >
      <LexicalComposer
        initialConfig={initialConfig}
        key={`editor-composer-${id}`}
      >
        <div className="flex flex-row gap-2 absolute bottom-[-43px] left-0 border border-sh-three rounded-lg p-2 py-1 bg-bg-zero items-center">
          <TextFormatToolbarPlugin />
          <ListToolbarPlugin />
        </div>
        <ListPlugin />
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
