interface HeadingProps {
    title: string;
}

const Heading : React.FC<HeadingProps> = ({title}) => {
    return (
        <h1 className='md:text-6xl text-5xl font-semibold text-gray-800 py-10'>
            {title}
        </h1>
    );
}

export default Heading;