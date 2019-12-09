import React, { Fragment } from 'react';


function Nav() {

    const font = { verticalAlign: 'Inherit' }

    return (
        <Fragment>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Navegación de palanca">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><font style={font}><font style={font}>App </font></font><span className="sr-only"><font style={font}><font style={font}>(actual)</font></font></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><font style={font}><font style={font}>Maps</font></font></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#" tabindex="-1" aria-disabled="true"><font style={font}><font style={font}>Ayuda</font></font></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><font style={font}><font style={font}>Acerca de </font></font></a>

                        </li>
                    </ul>
                </div>
            </nav>



        </Fragment>


    )


}

export default Nav;