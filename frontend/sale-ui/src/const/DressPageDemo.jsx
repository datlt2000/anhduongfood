
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faHeadset, faMedal, faTruck } from "@fortawesome/free-solid-svg-icons";

export const navLink = [
    {
        url: "/",
        title: "Trang chủ"
    },
    {
        url: "/about",
        title: "Giới Thiệu"
    },
    {
        url: "/product",
        title: "Sản Phẩm"
    },
    {
        url: "/post",
        title: "Tin Tức"
    },
    {
        url: "/product",
        title: "Tuyển Dụng"
    },
    {
        url: "/contacts",
        title: "Liên Hệ"
    },
]

export const advantage =
{
    title: "Cơm cháy Ánh Dương",
    description: "Với tình yêu quê hương và mong muốn đưa hương vị quê nhà đi xa hơn nữa," + 
    " Cơm cháy Ánh Dương được ra đời. Từ nguồn nguyên liệu sẵn có của địa phương, các loại gạo nếp," + 
    " gạo tám được gặt hái về từ cánh đồng lúa chín vàng, qua bàn tay chế biến khéo léo, " + 
    "cơm cháy Ánh Dương vẫn giữ nguyên vẹn hương vị “hạt ngọc” của đất trời đậm đà khó quên.",
    image: "/images/about.png"
}

export const featuresPage = {
    title: "Tại sao chọn chúng tôi?",
    description: 'Với mong muốn đem đến cho người dùng những sản phẩm an toàn, thơm ngon, với giá cả phải chăng, từ những nguyên liệu vùng quê chúng tôi sản xuất và cung cấp cho bạn những sản phẩm chất lượng được nhiều người dùng ưa chuộng',
    features: [
        {
            title: "An toàn sạch sẽ",
            description: 'Sử dụng những nguyên liệu sạch có nguồn gốc xuất sứ rõ ràng, quy trình sản xuất được chứng nhận đảm bảo an toàn vệ sinh thực phẩm',
            icon: <FontAwesomeIcon icon={faUserShield} />
        },
        {
            title: "Chất lượng đảm bảo",
            description: 'Hỗ trợ đổi trả sản phẩm nếu có vấn để khi nhận hàng',
            icon: <FontAwesomeIcon icon={faMedal} />
        },
        {
            title: "Vận chuyển toàn quốc",
            description: 'Tự hào sản xuất tại Việt Nam và hỗ trợ vận chuyển trên toàn quốc',
            icon: <FontAwesomeIcon icon={faTruck} />
        },
        {
            title: "Hỗ trợ 24/7",
            description: 'Mọi thắc mắc vui lòng liên hệ với chúng tôi để được giải đáp 24/7',
            icon: <FontAwesomeIcon icon={faHeadset} />
        }
    ]
}
export const postDefault = {
    id: 1,
    url: "/blog/1",
    image: "/images/food/product1.jpg",
    title: "",
    description: "",
    author: "dat.letrong",
    createdAt: "",
    status: 'Draft',
    contentHtml: "",
    content: ""
}

export const reviews = [
    {
        image: "/images/photo-chicken.jpg",
        name: "Adam Cuppy",
        review: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
            'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."'
    },
    {
        image: "/images/photo-salad.avif",
        name: "Charlotte Hale",
        review: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
            'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."'
    },
    {
        image: "/images/photo-beef.avif",
        name: "Silvester Wize",
        review: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
            'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."'
    }
]

export const footer = {
    title: '',
    image: "/images/logo-full.png",
    description: 'CÔNG TY CỔ PHẦN CHẾ BIẾN THỰC PHẨM ÁNH DƯƠNG',
    address: 'Thọ Sơn 1 Tân Châu, Thiệu Hóa, Thanh Hóa',
    facebook: 'https://www.facebook.com/comchayanhduong',
    twitter: 'https://twitter.com',
    tiktok: 'https://tiktok',
    email: 'anhduongfood201123../publicgmail.com',
    phone: '0982534000 - 0868365456',
    linkedin: 'https://linkedin',
    copyright: '© Copyright 2024, Anh Duong Food. All Rights Reserved.',
}

export const slides = [
    {
        imageLg: "/images/food/banner-1.jpg",
        imageXs: "/images/food/banner-1.jpg",
    },
    {
        imageLg: "/images/food/banner-2.jpg",
        imageXs: "/images/food/banner-2.jpg",
    },
]

export const collection1 = "/images/food/banner-1.jpg";
export const collection2 = "/images/food/banner-1.jpg";
export const collection3 = "/images/food/banner-2.jpg";
export const collection4 = "/images/food/banner-2.jpg";

export const about = {
    masthead: {
        heading: "Giới thiệu",
        subheading: "Câu chuyện sản phẩm cơm cháy Ánh Dương",
        image: "/images/food/banner-2.jpg"
    },
    session: [
        {
            title: "Sự hình thành",
            text: ["Tân Châu là một xã thuần nông của huyện Thiệu Hóa nằm ở hữu ngạn Sông Chu, dọc theo núi Đọ. " +
                "Phía Đông giáp thành phố Thanh Hóa, phía tây giáp thị trấn Thiệu Hóa và xã Thiệu Nguyên. Phía Nam giáp huyện Đông Sơn và xã Thiệu Giao. " +
                "Phía Bắc giáp xã Thiệu Duy và xã Thiệu Hợp.",
            "Trong những năm qua thực hiện mục tiêu Quốc gia xây dựng Nông thôn mới, kinh tế xã hội, đời sống, " +
            "văn hoá của nhân dân trong xã ngày càng được nâng lên. Cán bộ và nhân dân trong xã luôn phát huy truyền thống quý báu của quê hương, " +
            "không ngừng phấn đấu tích cực thi đua trên mọi lĩnh vực phát triển kinh tế - xã hội. " +
            "Là một người con của mảnh đất Tân Châu sau nhiều năm đi làm việc xa quê, tôi nung nấu muốn phát triển nghề truyền thống của gia đình.",
            "Với tình yêu quê hương và mong muốn đưa hương vị  quê nhà đi xa hơn nữa, thương hiệu Cơm cháy Ánh Dương được ra đời. Những ngày đầu đi vào hoạt động, " +
            "thương hiệu Cơm Cháy Ánh Dương phải cạnh tranh gay gắt với nhiều thương hiệu cơm cháy khác trong và ngoài tỉnh, " +
            "gặp nhiều khó khăn trong quá trình tiêu thụ sản phẩm. Tuy nhiên, với nhiệt huyết của tuổi trẻ và lòng đam mê học hỏi, " +
            "chúng tôi đã nhanh chóng nhận thấy các yếu tố thuận lợi khi cơ sở chúng tôi nằm trong vùng nguyên liệu dồi dào, giao thông thuận tiện " +
            "cũng như nguồn nhân công lao động lớn.",
            "Tháng 02/2020 Thương hiệu Cơm Cháy Ánh Dương được ra đời. Nhờ áp dụng công nghệ hiện đại, cơ sở chúng tôi đã thay đổi quy cách sản xuất " +
            "từ phơi sấy cơm bằng ánh nắng mặt trời sang hệ thống sâý khép kín bằng hơi nước điều hòa. Với công nghệ sấy mới , việc sản xuất sản phẩm không " +
            "còn phụ thuộc vào thời tiết. Đồng thời, đảm bảo cơm cháy được vệ sinh và chất lượng hơn"
            ],
        },
        {
            title: "Chất lượng là ưu tiên số một",
            text: ["Từ nguồn nguyên liệu sẵn có của địa phương, các loại gạo nếp, gạo tám được gặt hái về từ cánh đồng lúa chín vàng, " +
                "sau đó cho vào rửa sạch rồi nấu lên sao cho thật vừa nước, đủ độ dẻo. Khi cơm chín tới phải nhanh chóng đưa ra khuôn sấy " +
                "trong phòng sấy tách ẩm để cơm thật khô, dễ bảo quản. Quá trình tách ẩm trong phòng kín với nhiệt độ cao đều giúp cho cơm không " +
                "bị bám bụi bẩn và giữ được vị đậm đà của cơm. Cách làm này thay thế hoàn toàn công đoạn phơi thủ công bằng ánh nắng mặt trời theo " +
                "phươnơng pháp truyền thống. Cơm sau khi  sấy khô được đưa vào nồi chiên chuyên dụng để không bị ngấm dầu. Khi cơm nguội sẽ được " +
                "đưa vào đóng gói bằng túi nilon chuyên dụng dùng cho thực phẩm ăn liền, đảm bảo an toàn vệ sinh thực phẩm. Đây chính là những " +
                "ưu điểm nổi trội so với phương pháp sản xuất thủ công truyền thống.",
            "Tại cơ sở của chúng tôi, mọi công đoạn đều được thực hiện một cách nghiêm ngặt, kỹ lưỡng, từ khâu lựa chọn những gạo hạt to, " +
            "tròn đều, trắng bóng đến sử dụng loại dầu chiên cơm đạt chuẩn chất lượng, ruốc ăn kèm phải được làm từ nguồn thịt sạch có nguồn " +
            "gốc xuất sứ, có giấy kiểm định chất lượng. Đặc biệt, dù không sử dụng phụ gia thực phẩm nhưng sản phẩm cơm cháy Ánh Dương vẫn " +
            "giữ được những nét đặc trưng của sản phẩm như màu vàng nhạt, vị đậm đà, hương thơm tự nhiên (từ gạo), giàu chất dinh dưỡng và " +
            "xốp giòn hấp dẫn. Món cơm cháy thu hút thực khách còn bởi lớp nước sốt đậm đà đủ vị theo công thức gia truyền cùng một lớp chà " +
            "bông phủ kín mặt bánh siêu ngon… chắc chắn sẽ là hương vị thực khách không thể nào quên.",
            "Hiện tại, Xưởng sản xuất đã tiến hành đăng ký mã số mã vạch, cải tiến mẫu mã, bao bì… Sản phẩm vừa có chất lượng, vừa có mẫu mã " +
            "đẹp nên được rất nhiều khách hàng lựa chọn sử dụng, thích hợp để làm món quà biếu ý nghĩa đến bạn bè và người thân.",
            "Nhờ tự động hóa nhiều khâu trong quá trình sản xuất, quy mô sản xuất tại Cơ sở Cơm cháy Ánh Dương được nâng lên đáng kể (từ quy " +
            "mô vừa và nhỏ đã phát triển lên quy mô 120.000 tấn gạo/năm). Cơm cháy Ánh Dương không chỉ nổi tiếng ở Thanh Hóa mà còn được người " +
            "tiêu dùng tại nhiều vùng miền trên cả nước yêu thích. Tính tự nhiên, hương vị ngọt ngào của hạt “ngọc thực” đã tạo nên nét hấp dẫn " +
            "khó cưỡng cho những người sành ẩm thực.",
            ]
        }
    ],
    video: "/video"
}

export const contact = {
    masthead: {
        heading: "Liên hệ",
        subheading: "Bạn có câu hỏi? Chúng tôi có câu trả lời.",
        image: "/images/contact-bg.jpg"
    },
    description: "Bạn muốn liên hệ với chúng tôi, hãy điền các ô bên dưới và chúng tôi sẽ liên hệ sớm nhất có thể!"

}
export const productDefault = {
    id: 1,
    url: "/product/1",
    image: "/images/food/product2.jpg",
    images: "imageUrl",
    title: "",
    price: "",
    wrap: "",
    weight: "",
    expired: "",
    descriptionHtml: "",
    status: "Draft",
    description: [
    ]
}