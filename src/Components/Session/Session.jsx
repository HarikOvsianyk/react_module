import React , {useEffect} from 'react';
import * as api from '../../Apis';
import { useHistory } from 'react-router';

export const Session = () => {
    const history = useHistory();

    useEffect(()=> {
        genereteSessionId();

        return () => {
            localStorage.removeItem('request_token');
        };
    }, []);

    const genereteSessionId = async () => {
        const request_token = localStorage.getItem('request_token');
        const sessionResponse = await api.genereteSessionId(request_token);
        console.log(sessionResponse);
        localStorage.setItem('session_id', sessionResponse.session_id);
        history.push('/main');
    };
    return <div>Hello Session</div>
}