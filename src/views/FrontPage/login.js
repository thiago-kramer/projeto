import React from "react";
import GitLogo from '../../assets/img/icons/common/github.svg';
import GoogleLogo from '../../assets/img/icons/common/google.svg';

const Login = () => {
    return (
        <div id="root">
            <div className="main-content">
                <div className="header bg-gradient-info py-7 py-lg-8">
                    <div className="container">
                        <div className="header-body text-center mb-7">
                            <div className="justify-content-center row">
                                <div className="col-md-6 col-lg-5"><h1 className="text-white">Welcome!</h1><p
                                    className="text-lead text-light">Use these awesome forms to login or create
                                    new account in your project for free.</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1"
                             viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <div className="mt--8 pb-5 container">
                    <div className="justify-content-center row">
                        <div className="col-md-7 col-lg-5">
                            <div className="bg-secondary shadow border-0 card">
                                <div className="bg-transparent pb-5 card-header">
                                    <div className="text-muted text-center mt-2 mb-3">
                                        <small>Sign in with</small>
                                    </div>
                                    <div className="btn-wrapper text-center">
                                        <a href="#pablo" className="btn-neutral btn-icon btn btn-default">
                                            <span className="btn-inner--icon"><img alt="..." src={GitLogo}/></span>
                                            <span className="btn-inner--text">Github</span>
                                        </a>
                                        <a href="#pablo" className="btn-neutral btn-icon btn btn-default">
                                            <span className="btn-inner--icon"><img alt="..."src={GoogleLogo}/></span>
                                            <span className="btn-inner--text">Google</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="px-lg-5 py-lg-5 card-body">
                                    <div className="text-center text-muted mb-4">
                                        <small>Or sign in with credentials</small>
                                    </div>
                                    <form role="form" className="">
                                        <div className="mb-3 form-group">
                                            <div className="input-group-alternative input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                                </div>
                                                <input placeholder="User" type="test" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group-alternative input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input placeholder="Password" autoComplete="new-password" type="password" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                                            <label className="custom-control-label" htmlFor=" customCheckLogin">
                                                <span className="text-muted">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="my-4 btn btn-primary">Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="mt-3 row">
                                <div className="col-6">
                                    <a className="text-light" href="#pablo"><small>Forgot password?</small></a>
                                </div>
                                <div className="text-right col-6">
                                    <a className="text-light" href="#pablo"><small>Create new account</small></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
