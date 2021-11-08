import {MainPage} from '../Pages/MainPage';
import {LogInPage} from '../Pages/LogInPage';
import {SignUpPage} from '../Pages/SignUpPage';
import {ErrorPage} from '../Pages/ErrorPage';

export const allRoutes = [
    {path: '/',component: LogInPage},
    {path: '/main',component: MainPage, isPrivate:true},
    {path: '/registration',component: SignUpPage},
    {path: '/error',component: ErrorPage},
]