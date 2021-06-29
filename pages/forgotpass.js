const forgotpass = () => {
    return (
        <main className="p-4 h-100 bg-color font-primary">
            <div className="container-fluid">
                <div className="col-sm-12 col-md-8 col-xl-8 d-flex justify-content-center align-content-center">
                    <div className="card-change">
                        <h1 className="text-center">Forgot password</h1>
                        <form>
                            <label className="text-center" htmlFor="email">Enter your email</label>
                            <input
                                type="text"
                                placeholder="email@example.com"></input>
                        </form>
                        <button className=" btn btn-sm font-weight-bold bg-light cursor-pointer">
                            <a href="mail.google.com">
                                Send change password link
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default forgotpass;
