import React from "react"
import { Stack } from "react-bootstrap"

const TYPE = {
    standard: "a",
    quilted: "",
    woven: "",
    masonry: "",
    slider: "",
    fasten: { gridAutoFlow: 'column' }
}
const Item = ({ children, cols = 1, rows = 1, ...props }) => {
    return (
        <div style={{
            gridColumnEnd: `span ${cols}`, gridRowEnd: `span ${rows}`,
            height: props?.height ? `${props.height * rows + (rows - 1) * props.gap}px` : "auto",
            width: props?.width ? `${props.width * cols + (cols - 1) * props.gap}px` : "auto"
        }} className="image-list-item">
            {React.Children.map(children, (child, idx) =>
                child ? React.cloneElement(child, {
                    ...child.props,
                    className: `${child.props?.className ?? ""} ${idx === 0 ? "image-list-item-img" : ""}`
                }) : null
            )}
        </div>
    )
}
const ITEM_POSITION = {
    top: "position-absolute top-0",
    bottom: "position-absolute bottom-0",
    below: "position-relative",
}
const ItemBar = ({ position, className, title, subtitle, icon }) => {
    const _class = ITEM_POSITION[position ?? "below"] ?? ITEM_POSITION["below"]
    return (
        <div className={_class + " " + className ?? ""}>
            <Stack direction="horizontal">
                <Stack>
                    <div style={{ fontSize: '16px' }}>{title}</div>
                    <div style={{ fontSize: '12px' }}>{subtitle}</div>
                </Stack>
                <div>
                    {icon}
                </div>
            </Stack>
        </div>
    )
}
export default function ImageList({ variant, rowHeight, columnWidth, children, cols = 3, gap = 4 }) {
    const s = TYPE[variant ?? "fasten"]
    return (
        <div className="d-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: `${gap}px`, ...s }}>
            {React.Children.map(children, child =>
                child ? React.cloneElement(child, {
                    ...child.props,
                    height: rowHeight,
                    width: columnWidth,
                    gap: gap
                }) : null
            )}
        </div>
    );
}

ImageList.Item = Item
ImageList.ItemBar = ItemBar