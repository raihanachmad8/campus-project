interface HeadingProps {
    title: string;
}

const Heading : React.FC<HeadingProps> = ({title}) => {
    return (
        <h1 className='md:text-4xl text-2xl font-bold text-gray-800'>
            {title}
        </h1>
    );
}

export default Heading;