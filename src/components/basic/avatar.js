import { LocalImg } from "./imgProvider";

const Avatar = ({ image, size, state, username }) => {
  return (
    <div id="avatar" className="mr-6 flex md:justify-center items-center">
      {!!state ? (
        <img
          alt="avatar"
          src={image}
          width={size}
          height={size}
          className="rounded-full"
          style={{ height: size, maxWidth: size }}
        />
      ) : (
        <div
          className="flex md:justify-center items-center relative text-white font-poppinsMedium"
          style={{ width: size, height: size }}
        >
          <img
            alt="nameAvatar"
            width={size}
            height={size}
            src={LocalImg.avatarPlaceholder}
            className="absolute"
            style={{ maxWidth: size }}
          />
          {username?.[0]}
        </div>
      )}
    </div>
  );
};

export default Avatar;
