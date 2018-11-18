import React, { PureComponent } from 'react'
import { Tabs } from 'antd-mobile';

class TabCard extends PureComponent {
  render() {
    const { tabs, pages } = this.props
    return (
      <div className="tab-card">
        <Tabs
          initialPage={1}
          tabBarPosition="left"
          tabDirection="vertical"
          tabs={tabs}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}
        >{
          pages.map(page => (
            <div className="tab-card-cnt" key={page.id}>{
              page.paragraphs.map(paragraph => (
                <div className="tab-card-para" key={paragraph.id}>
                  {paragraph.title}
                  <p className="tab-card-describ">{paragraph.describe}</p>
                </div>
              ))
            }</div>
          ))
        }</Tabs>
      </div>
    )
  }
}
export default TabCard