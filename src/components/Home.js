import './Home.css';

export default function Home() {
  return (
    <div className="page-section" >
      <div className="container">

        {/* Home text */}
        <h2 className="card-pricing title-section wow fadeInUp" style={{ maxWidth: "250px", padding: "10px 10px", marginBottom: "20px" }}>За къщите</h2>

        {/*Main Page Text*/}
        <div className="wow fadeInUp">

          <div className="card-pricing">
            {/* <div className="text-center wow fadeInUp">
              <h2 className="title-section">За къщите</h2>
            </div> */}
            <h5>
              <p style={{ textAlign: "left" }}>
                Къщи за гости <span className="text-primary" style={{ fontSize: "x-large" }}> Нели</span> са построени в местност <span className="text-color">Цигов чарк</span>, с прекрасен  изглед към <span className="text-color">язовир Батак</span>.
                <br />
                <br />
                Намират се на няколко стотин метра от брега на язовира и в непосредствена близост до борова гора.
                <br />
                Само на <span className="text-color">140 км от София</span> и на <span className="text-color">66 км от Пловдив</span>.
                <br />
                <br />
                Вилите са на <span className="text-color">два етажа</span> и са подходящи за настаняване на <span className="text-color">6 човека</span>.
                <br />
                <br />
                На разположение на гостите са безплатен <span className="text-color">WiFi</span> и безплатни <span className="text-color">паркинг</span> места (до изчерпване на наличностите).
                <br />
                <br />
                На <span className="text-color">първия етаж</span> са разположени <span className="text-color">хол</span> с напълно <span className="text-color">оборудвана кухня </span>
                (микровълнова фурна, фурна  за готвене с термоплот, съдомиялна машина, хладилник, и необходимата посуда)
                и <span className="text-color">спалня</span> с две единични легла.
                <br />
                На същия етаж има санитарен възел с <span className="text-color">баня и тоалетна</span>.
                <br />
                От хола се излиза на голяма <span className="text-color">покрита веранда</span>. Всяка веранда разполага с <span className="text-color">барбекю на дървени въглища</span>.
                <br />
                <br />
                На <span className="text-color">втория етаж</span> има <span className="text-color">две спални</span> (една с две единични легла и една със спалня),
                <span className="text-color"> баня и тераса</span> с изглед към язовира или към планината.
                <br />
                <br />
                <span className="text-color">Дворът</span> е просторен, затревен и обезопасен, подходящ за волни детски игри.
                <br />
                <br />
                <span className="text-color">Отоплението</span> през зимните месеци е с <span className="text-color">локално парно</span>.
              </p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}