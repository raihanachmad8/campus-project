import Heading from "../../../components/Heading";

const About: React.FC = () => {
    return (
        <section id='about' className='w-full h-screen max-w-7xl mx-auto'>
            <div className='flex flex-col items-center justify-start pt-28   h-full'>
                <Heading title='About Us' />
                <p className="text-lg font-normal my-4 text-center">
                    Welcome to the About page of class 2E, Department of Informatics Engineering. Our class consists of a group of enthusiastic and dedicated students who develop technology projects to improve the quality of community services. With a collaborative and innovative spirit, we have been involved in creating applications that help solve local problems, information systems that make data easier to access, and programs that support education and health. Not only focusing on technical development, we also actively participate in various social and community service activities, striving to make technology a tool for positive change. We believe that through hard work and creativity, we can make a real and impactful contribution to society at large.
                </p>
            </div>
        </section>
    );
}

export default About;