import React from "react";

class Demo10 extends React.Component{

    constructor(){
        super();
            this.state={
                cat:"ani"
            }
        }
                catani(){
                    this.setState(
                        {cat:"ani"}
                    )

                }
                catflo(){
                    this.setState(
                        {cat:"flo"}
                    )

                }
                cattree(){
                    this.setState(
                        {cat:"tree"}
                    )
                }
                catwater(){
                    this.setState(
                        {cat:"water"}
                    )

                }
    render(){
        return(
            <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3 text-center">
                        <button className="btn btn-primary" onClick={()=>this.catani()}>Animal</button>
                    </div>
                    <div className="col-3 text-center">
                        <button className="btn btn-primary" onClick={()=>this.catflo()}>Flawer</button>

                    </div>
                    <div className="col-3 text-center">
                        <button className="btn btn-primary" onClick={()=>this.cattree()}>Tree</button>

                    </div>
                    <div className="col-3 text-center">
                        <button className="btn btn-primary"onClick={()=>this.catwater()}>Water</button>

                    </div>
                </div>
                {this.state.cat=="ani" &&
                <div className="row">
                    <div className="col-3 mt-4">
                        <img src="https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg" className="w-100" style={{height:"250px;"}}/>
                    </div>
                    <div className="col-3 mt-4">
                        <img src="https://i.dailymail.co.uk/i/pix/2014/09/29/1412019424204_wps_7_Television_programmes_Nat.jpg" className="w-100" style={{height:"250px;"}}/>
                    </div>
                    <div className="col-3 mt-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5gcfwCzGt3_mnCNGgdWFnnF8geIk3h8wYw&usqp=CAU" className="w-100" style={{height:"250px;"}}/>
                    </div>
                    <div className="col-3 mt-4" >
                        <img src="https://cdn.shopify.com/s/files/1/3026/6974/files/bulldog-puppy.jpg?v=1533748956" className="w-100" style={{height:"250px;"}}/>
                    </div>
                </div>
                }
                {this.state.cat=="flo" &&
                <div className="row">
                    <div className="col-3 mt-4">
                        <img src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" className="w-100" style={{height:"250px;"}}/>

                    </div>
                    <div className="col-3 mt-4">
                        <img src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000" className="w-100" style={{height:"250px;"}}/>

                    </div>

                    <div className="col-3 mt-4">
                        <img src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-blossoming-rose-flower-royalty-free-image-1580853844.jpg" className="w-100" style={{height:"250px;"}}/>

                    </div>

                    <div className="col-3 mt-4">
                        <img src="https://static.theprint.in/wp-content/uploads/2022/12/ANI-20221207170407.jpg" className="w-100" style={{height:"250px;"}}/>

                    </div>
                 </div>
                }
                 {this.state.cat=="tree" &&
                 <div className="row">
                    <div className="col-3 mt-4">
                        <img src="https://5.imimg.com/data5/ANDROID/Default/2021/3/KZ/QY/MG/111770050/product-jpeg-500x500.jpg" className="w-100" style={{height:"250px;"}}/>

                    </div>
                    <div className="col-3 mt-4">
                        <img src="https://housing.com/news/wp-content/uploads/2022/12/image1-15.jpg" className="w-100" style={{height:"250px;"}}/>

                    </div>
                    <div className="col-3 mt-4">
                        <img src="https://thisoldhouse.jppadmin.com/wp-content/uploads/sites/10/2022/05/AdobeStock_26788681.0.0-scaled.jpg" className="w-100" style={{height:"250px;"}}/>

                    </div>
                    <div className="col-3 mt-4">
                        <img src="https://thumbs.dreamstime.com/b/banana-tree-bunch-growing-bananas-alanya-turkey-71214312.jpg" className="w-100" style={{height:"250px;"}}/>

                    </div>

                 </div>
                }
                {this.state.cat=="water"&&
                 <div className="row">
                    <div className="col-3 mt-4">
                        <img src="https://thumbs.dreamstime.com/b/fantastic-drops-water-glass-12259486.jpg" className="w-100" style={{height:"250px;"}}/>
                    </div>
                    <div className="col-3 mt-4">
                        <img src="https://dropconnect.com/wp-content/uploads/2023/03/wine-glass-spill-water.jpg" className="w-100" style={{height:"250px;"}}/>
                    </div>
                    <div className="col-3 mt-4">
                        <img src="https://static.sciencelearn.org.nz/images/images/000/002/343/full/Water20161110-17124-gv7a3b.jpg?1674168038" className="w-100" style={{height:"250px;"}}/>
                    </div>
                    <div className="col-3 mt-4">
                        <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg"className="w-100" style={{height:"250px;"}} />

                 </div>
            </div>
            }

            </div>
    

            </>
        )
    }
}

export default Demo10;
