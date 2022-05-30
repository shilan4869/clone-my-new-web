const SideBanners = () => {
    return ( 
        <div className="hidden 3xl:block text-center fixed pointer-events-none top-0 bottom-0 right-0 left-0">
            <div className="flex gap-8 justify-center items-center h-full mx-[40px]">
                <a href="https://divineshop.vn/search?q=netflix">
                <img src="https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/banner dọc 1404-39341.png?hash=1649906940" alt="" className="w-[210px] pointer-events-auto"/>
                </a>
                <div className="container "></div>
                <a href="https://divineshop.vn/search?q=youtube+premium">
                <img src="https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/banner dọc 1404-39341.png?hash=1649906940" alt="" className="w-[210px] pointer-events-auto"/>
                </a>
            </div>
        </div>
     );
}
 
export default SideBanners;