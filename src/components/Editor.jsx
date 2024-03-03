import { marked } from "marked";
import React, { useEffect, useState } from "react";

const Editor = () => {
  const [content, setContent] =
    useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '' && lastLine == '') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

  useEffect(() => {
    const html = marked(content, { breaks: true });

    document.getElementById("preview").innerHTML = html;
  }, [content]);

  return (
    <div className=" bg-secondary rounded-2xl w-[40rem] h-[30rem] p-2">
      <h1 className="font-semibold pl-4 text-white text-center text-lg">
        Editor
      </h1>
      <textarea
        name="editor"
        id="editor"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        className=" bg-tertiary w-full h-[92%] overflow-y-auto outline-none p-2 rounded-lg resize-none"
      ></textarea>
    </div>
  );
};

export default Editor;
