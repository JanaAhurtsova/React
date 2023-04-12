import style from './style.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={style.container}>
      <section className={style.loader__wrapper}>
        <div className={style.loader}>
          <div className={style.line1}></div>
          <div className={style.line2}></div>
          <div className={style.line3}></div>
        </div>
      </section>
    </div>
  );
};
