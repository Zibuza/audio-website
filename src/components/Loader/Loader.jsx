import scss from './Loader.module.scss';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={scss.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#CD2C2C"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};
