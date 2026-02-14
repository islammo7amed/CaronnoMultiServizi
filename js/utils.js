export function Render(url, element, headerFlag) {
    fetch(url).then((res) => {
        res.text().then((text) => {
            element.innerHTML = text;
            if (headerFlag) {
                initHeader();
            }
        });
    });
}

export async function GetComponent(url) {
    const res = await fetch(url);
    const text = await res.text();
    return text;
}

export function RenderTemplate(template, data) {
    let keys = Object.keys(data);
    let html = template;
    keys.map((item) => {
        html = html.replaceAll(`{{${item}}}`, data[item]);
    });
    return html;
}

export function InitTemplate(template) {
    return template? template.split("<template>")[1]?.split("</template>")[0] : template;
}