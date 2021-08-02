import styles from './styles.module.scss';
import Link from 'next/link';
export function ButtonHome() {
  return (
    <div className={styles.container}>
      <span>Desenvolvido por Manoel Duran</span>
      <button>
        <Link href="/">
          <a>Voltar ao topo</a>
        </Link>
      </button>
    </div>
  );
}