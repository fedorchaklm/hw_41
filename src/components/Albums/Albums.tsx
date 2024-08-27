import styles from "./Albums.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import { getAlbums } from "../../store/albums";

export default function Albums() {
  const albums = useAppSelector(state => state.albums.albums);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAlbums());
  }, []);

  return (
    <ul className={styles.albumList}>
      {albums?.map((album) => (
        <li key={album.id} className={styles.albumList__item}>
          <p>{album.id}</p>
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </li>
      ))}
    </ul>
  );
}
