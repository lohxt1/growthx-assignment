// Useful Resources
// - https://github.com/acywatson/glyf (suggested by official lexical docs)
// - https://github.com/facebook/lexical/tree/main/packages/lexical-playground

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { ListNode, ListItemNode } from "@lexical/list";

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

const FreeTextInputStatic = ({
  value,
  className,
}: {
  value?: string | null;
  className?: string;
}) => {
  const initialConfig = {
    namespace: "Free text editor",
    editorState: value || JSON.stringify(valueInit),
    onError: (error: Error) => {
      throw error;
    },
    theme,
    editable: false,
    nodes: [ListNode, ListItemNode],
  };

  return (
    <div className={`relative gap-y-2 flex flex-col ${className}`}>
      <LexicalComposer initialConfig={initialConfig}>
        <ListPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className="contentEditable" />}
          placeholder={
            <div className="absolute top-0 left-0 pointer-events-none opacity-50"></div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </LexicalComposer>
    </div>
  );
};

export default FreeTextInputStatic;
