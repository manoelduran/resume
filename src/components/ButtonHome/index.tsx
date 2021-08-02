import styles from './styles.module.scss';
export function ButtonHome() {
  return (
    <div className={styles.container}>
      <span>Desenvolvido por Manoel Duran</span>
      <button>
        <a href="/">Voltar ao topo</a>
      </button>
    </div>
  );
}