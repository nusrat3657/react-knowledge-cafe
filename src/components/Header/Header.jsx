import profile from '../../assets/img/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-4 mx-10 border-b-2'>
            <h1 className='text-4xl font-bold exo-2'>Knowledge Cafe</h1>
            <img className='w-[60px] h-[50px]' src={profile} alt="" />
        </header>
    );
};

export default Header;