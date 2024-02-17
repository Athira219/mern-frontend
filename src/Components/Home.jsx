import React from 'react'

function Home() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12  ">
                    <div className=" w-100  ">
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                            <div className="container-fluid d-flex justify-content-start">


                                <h4 style={{ color: 'white', overflowY: 'hidden' }}>  <i className="fa-solid fa-house fs-2 text-white me-3"></i>Home Page</h4>


                            </div>
                        </nav>

                        <img className="w-100 img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zWGZWmx_3OLnGaCcOItmLoIQ34lnm9BHOQ&usqp=CAU"
                            alt="" />


                    </div>
                    <div className="row">
                        <div className="col-sm-12 ">
                            <h4 className="fw-bold text-center mt-4 text-primary" style={{ overflowY: 'hidden' }}>Welcome <span id="username" style={{ color: 'orangered' }}>User</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum consequatur adipisci
                                delectus tenetur ratione hic quo, impedit nobis temporibus sit necessitatibus eum commodi
                                praesentium ipsum, ad, cupiditate nostrum exercitationem!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum consequatur adipisci
                                delectus tenetur ratione hic quo, impedit nobis temporibus sit necessitatibus eum commodi
                                praesentium ipsum, ad, cupiditate nostrum exercitationem!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum consequatur adipisci
                                delectus tenetur ratione hic quo, impedit nobis temporibus sit necessitatibus eum commodi
                                praesentium ipsum, ad, cupiditate nostrum exercitationem!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum consequatur adipisci
                                delectus tenetur ratione hic quo, impedit nobis temporibus sit necessitatibus eum commodi
                                praesentium ipsum, ad, cupiditate nostrum exercitationem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum consequatur adipisci
                                delectus tenetur ratione hic quo, impedit nobis temporibus sit necessitatibus eum commodi
                                praesentium ipsum, ad, cupiditate nostrum exercitationem!
                            </p>


                        </div>

                    </div>




                </div>


            </div>
        </div>
    )
}

export default Home
