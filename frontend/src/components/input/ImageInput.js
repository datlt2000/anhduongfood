export default function ImageInput(props) {
    return (
        <div className={props.className}>
            <label htmlFor="create-product-images">
                <div style={{ height: 120, width: 100, backgroundColor: '#87CEFA' }} className="d-flex flex-column rounded shadow-right">
                    {props.icon}
                    <span style={{ fontSize: '13px' }} className="text-center pb-4 pt-2">{props.children}</span>
                </div>
            </label>
            <input type="file" name="images" id="create-product-images" accept=".png,.jpg,.jpeg,.webp,.gif,.heif" onChange={props.onChange} className="d-none" />
        </div>
    );
}