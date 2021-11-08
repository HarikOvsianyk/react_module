import {MainPage} from '../Pages/MainPage';
import {LogInPage} from '../Pages/LogInPage';
import {SignUpPage} from '../Pages/SignUpPage';
import {ErrorPage} from '../Pages/ErrorPage';
import {SessionPage} from '../Pages/SessionPage';

export const allRoutes = [
    {path: '/',component: LogInPage},
    {path: '/main',component: MainPage, isPrivate:true},
    {path: '/session', component: SessionPage},
    {path: '/registration',component: SignUpPage},
    {path: '/error',component: ErrorPage},
]