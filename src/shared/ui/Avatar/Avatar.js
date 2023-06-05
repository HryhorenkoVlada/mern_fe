import './Avatar.scss';

const Avatar = ({ className = '', image, alt, width = 64 }) => {
  return (
    <div className={`avatar ${className}`}>
      <img src={image} alt={alt} style={{ width: width, height: width }} />
    </div>
  );
};

export default Avatar;
