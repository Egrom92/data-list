const HtmlRender = ({children: __html, ...props}) => {
    return <div {...props}  dangerouslySetInnerHTML={{__html}}  />
}

export default HtmlRender