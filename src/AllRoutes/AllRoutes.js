import {MainPage} from '../Pages/MainPage';
import {LogInPage} from '../Pages/LogInPage';
import {SignUpPage} from '../Pages/SignUpPage';

export const AllRoutes = [
    {path: '/',component: LogInPage},
    {path: '/main',component: MainPage},
    {path: '/registration',component: SignUpPage},

]