import Heading from "../../../components/Heading";

const About: React.FC = () => {
    return (
        <section id='about' className='w-full h-max xl:h-screen max-w-3xl md:h-max 2xl:max-w-7xl lg:max-w-5xl mx-auto p-5'>
            <div className='flex flex-col items-center justify-start xl:justify-center py-20 h-full'>
                <Heading title='About Us' />
                <p className=" text-xl md:text-3xl lg:text-3xl 2xl:text-4xl font-normal text-gray-600 my-4 text-center max-md:text-left">
                    Welcome to the About page of class 2E, Department of Informatics Engineering. Our class consists of a group of enthusiastic and dedicated students who develop technology projects to improve the quality of community services. With a collaborative and innovative spirit, we have been involved in creating applications that help solve local problems, information systems that make data easier to access, and programs that support education and health. Not only focusing on technical development, we also actively participate in various social and community service activities, striving to make technology a tool for positive change. We believe that through hard work and creativity, we can make a real and impactful contribution to society at large.
                </p>
            </div>
        </section>
    );
}

export default About;