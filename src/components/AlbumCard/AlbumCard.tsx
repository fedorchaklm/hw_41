import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './AlbumCard.module.css';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getPhotos } from "../../store/albums";

export default function AlbumCard() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const photos = useAppSelector(state => state.albums.photos);

  useEffect(() => {
    // const albumId = Number(id);
    // if (!isNaN(albumId)) {
      dispatch(getPhotos(Number(id)));
    // }
  }, [id]);

  return (
    <div className={styles.cardWrap}>
      <h1>Photos</h1>
      <ul className={styles.cardList}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
