interface ImageProps {
    src: string;
    alt: string;

}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
    return (
        <img
            draggable={false}
            src={src}
            loading="lazy"
            decoding="async"
            srcSet={
                src +
                " 300w, " +
                src + " 768w, " +
                src + " 1280w" +
                src + " 1920w" +
                src + " 2560w"
            }
            alt={alt}
            className="w-full h-full object-cover rounded hover:scale-105 hover:grayscale transition-all duration-500"
        />
    );
}

export default Image;