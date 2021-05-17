import '../../assets/styles/components/Sidebar.scss'
import classNames from 'classnames';
export function Sidebar (currentStep: any) {
  const sidebarItem = classNames('sidebar__item', {
    active: currentStep,
  });
  return (
    <div className="sidebar__container">
      <div className="sidebar__info--container">
        <div  className={currentStep.currentStep === 0 ? sidebarItem : 'sidebar__item'}>
          <div className="sidebar__item--step">1</div>
          <p className="sidebar__item--title">Datos del auto</p>
        </div>
        <span className="sidebar__item--divider" />
        <div className={currentStep.currentStep === 1 ? sidebarItem : 'sidebar__item'}>
          <div className="sidebar__item--step">2</div>
          <p className="sidebar__item--title">Arma tu plan</p>
        </div>
      </div>
    </div>
  )
}
