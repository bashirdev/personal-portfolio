import React from 'react';
import './Common.css'

const Common = () => {
    return (
        <section>
        <div className='sideber justify-content-lg-start'>
        <div className='fa-icon justify-content-md-center'>
           <ul>
                <li><a href='https://www.linkedin.com/in/bashir-ahammed/' target='blank'><i className='fab fa-linkedin'></i> </a>  </li>
                <li><a href='https://github.com/bashirdev/' target='blank'><i className='fab fa-github  '></i>  </a>  </li>
                <li><a href='https://medium.com/@bashir.ahammed69' target='blank'><i className='fab fa-medium'></i>   </a>      </li>
                <li><a href='https://www.facebook.com/bashir.ahammed69' target='blank'><i className='fab fa-facebook'></i>  </a>       </li>
            </ul> 
            </div>
        </div>

        </section>
    );
};

export default Common;