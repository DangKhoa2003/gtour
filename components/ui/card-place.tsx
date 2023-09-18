import classNames from 'classnames/bind';
import styles from '@/components/scss/card-place.module.scss';
const cx = classNames.bind(styles);

interface CardPlaceProps {
      title: string;
      imgUrl: string;
}

const CardPlace: React.FC<CardPlaceProps> = ({ title, imgUrl }) => {
      return (
            <div
                  style={{ backgroundImage: `url('${imgUrl}')` }}
                  className={cx('card-place')}
            >
                  <h2 className='text-white text-3xl font-bold absolute bottom-4 left-4'>{title}</h2>
            </div>
      );
};

export default CardPlace;
