/**
 * Created by dp-ptcstd-34 on 10/3/2016.
 */

require("bootstrap/dist/css/bootstrap.css");

import React from 'react';
import {render} from 'react-dom';
import UserDetails from './user-details';


render(
    <UserDetails/>,
    document.getElementById('app')
);
