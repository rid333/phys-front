<script lang="ts">  
    import { PUBLIC_API_URL } from "$env/static/public";
    import { onMount } from "svelte";
    export let richText: any[];
    interface Child {
        type?: string;
        text?: string;
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        strikethrough?: boolean;
        url?: string;
        children?: Child[];
    };

    interface Content {
        type?: string;
        children?: Child[];
        value?: {
            sizes?: {
                tablet?: {
                    url?: string;
                }
            }
        };
    }
    
    function renderNode(node: Content): any {
        node.children?.forEach((child: Child) => {
            if (child.bold) {
                child.text = `<strong>${child.text}</strong>`;
            }
            if (child.italic) {
                child.text = `<em>${child.text}</em>`;
            }
            if (child.underline) {
                child.text = `<u>${child.text}</u>`;
            }
            if (child.strikethrough) {
                child.text = `<s>${child.text}</s>`;
            }
            if (child.url) {
                child.text= `<a target="_blank" href="${child.url}">${child.children?.map((child: Child) => child.text)}</a>`
            }
        });

        switch (node.type) {
            case "h1":
                return `<h1>${node.children?.map((child: Child) => child.text)}</h1>`;
            case "h2":
                return `<h2>${node.children?.map((child: Child) => child.text)}</h2>`;
            case "h3":
                return `<h3>${node.children?.map((child: Child) => child.text)}</h3>`;
            case "h4":
                return `<h4>${node.children?.map((child: Child) => child.text)}</h4>`;
            case "h5":
                return `<h5>${node.children?.map((child: Child) => child.text)}</h5>`;
            case "blockquote":
                return `<blockquote>${node.children?.map((child: Child) => child.text)}</blockquote>`;
            case "upload":
                return `<img src="${PUBLIC_API_URL}${node.value?.sizes?.tablet?.url}" />`;
            case 'ul':
                return `<ul>${node.children?.map((child: Child) => `<li>${child.children?.map((child: Child) => child.text).join('')}</li>`).join('')}</ul>`;
            case 'ol':
                return `<ol>${node.children?.map((child: Child) => `<li>${child.children?.map((child: Child) => child.text).join('')}</li>`).join('')}</ol>`;
            default:
                return `<p>${node.children?.map((child: Child) => child.text?.replace(/\n/g, '<br>'))}</p>`;
        }
    }
    let res = richText.map((node: Content) => renderNode(node)).join("");
    onMount(() => {
        console.log(res);
    });
</script>

<div>
    {@html res}
</div>