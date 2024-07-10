import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import React from 'react';
import TopbarSimple from '@/components/topbar/TopbarSimple';
import { navLink, footer } from '@/const/DressPageDemo';
import MapFooter from '@/components/footer/MapFooter';
import "./globals.css";
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cơm cháy Ánh Dương",
  description: "Sản phẩm cơm cháy Ánh Dương được công nhận đạt chất lượng sản phẩm OCOP 3 sao. Nguyên liệu làm cơm cháy là gạo nếp, gạo tẻ được trộn lẫn, đem vo sạch sau đó ngâm nước từ 3 đến 4 tiếng cho nở rồi để ráo. Sau đó sẽ được cho vào các khay nấu, đổ nước vừa đut và đạt vào các tủ nấu cơm tự động. Cơm chín được đổ ra các mặt phẳng, định hình và dàn đều trong khuôn sau đó sẽ được cho vào lò sấy khô ở nhiệt độ 120 độ C trong khoảng 1 đến 1,5 tiếng bằng máy sấy thực phẩm chuyên dụng và sẽ được cho vào các bếp chiên nhúng để chiên tới khi phồng, giòn và có màu vàng đều, sau đó được vớt ra, để ráo và sẽ được rắc đều một lớp gồm ruốc, nước sốt có vị đặc trưng của phương nam và vị chủ đạo truyền tống phía Bắc lên trên. Cơm cháy hoàn thành được đóng gói vào các túi hút chân không để giữ được độ giòn và hương vị thơm ngon nhất. Hạn sử dụng 60 ngày từ ngày sản xuất.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <TopbarSimple type="sticky" navLink={navLink} logo="/images/logo-full.png" />
          {children}
          <div className='bg-light-blue'>
            <MapFooter {...footer} />
          </div>
        </div>
      </body>
    </html>
  );
}
