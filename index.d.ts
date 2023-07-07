export type Theme = {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    a?: string;
    figcaption?: string;
    blockquote?: string;
    code?: string;
    inlineCode?: string;
    codeNumbers?: string;
    dt?: string;
    del?: string;
    ins?: string;
    italic?: string;
    strike?: string;
    underline?: string;
    bold?: string;
    samp?: string;
    kbd?: string;
    var?: string;
    mark?: string;
};

export type Options = {
    enableWordWrap?: boolean;
}

export default function (rawHtml: string, theme: Theme = {}, options: Options = {}): string;
