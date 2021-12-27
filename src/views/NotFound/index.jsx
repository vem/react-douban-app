import { useNavigate } from 'react-router-dom';

const Fn = () => {
    const navigate = useNavigate();
    setTimeout(navigate, 2000, '/');
    return <div className="text-center text-4xl text-gray-600 pt-60">404 Not Found</div>;
};

export default Fn;
