import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect, useState } from "react";

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

function MyOnChangePlugin({ onChange }: { onChange: (v: any) => void }) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
  return null;
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
    editorState: value || JSON.stringify(valueInit),
  };

  const [editorState, setEditorState] = useState(
    value || JSON.stringify(valueInit)
  );

  const onChange = (_editorState: any) => {
    const editorStateJSON = _editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
  };

  return (
    <div className={`relative gap-y-2 flex flex-col w-full ${className}`}>
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={
            <ContentEditable className="focus-visible:outline-none" />
          }
          placeholder={
            <div className="absolute top-0 left-0 pointer-events-none opacity-50">
              {placeholder}
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <MyOnChangePlugin onChange={onChange} />
      </LexicalComposer>
      {/* <button
        type="submit"
        className="text-bl-one p-1 px-2 border border-bl-one text-tx-one rounded-lg w-fit"
      >
        Save
      </button> */}
      <input type="hidden" value={editorState} name={id} />
    </div>
  );
};

export default FreeTextInput;
