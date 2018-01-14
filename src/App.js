/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react'
import { createJunctionTemplate, createPageTemplate } from 'junctions'
import { Link } from 'react-junctions'
import logo from './logo.svg'
import { Navbar } from './Navbar'
import { MarkdownWrapper } from './MarkdownWrapper'
import './App.css'

class App extends React.Component {
  renderContent() {
    let { junction } = this.props

    // If there is a currently selected page, get its component.
    // Use an uppercase `C` so the variable can be used in a JSX element.
    let Component =
      this.props.junction.activeChild && 
      this.props.junction.activeChild.component
    
    if (!Component) {
      // If the user enters an unknown URL, there will be no active child,
      // and thus no component.
      return <h1>404: Page Not Found</h1>
    }
    else {
      // Render the page's component, passing in the active Page object
      // as a prop.
      return <Component page={this.props.junction.activeChild} />
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='App-content'>
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export const AppJunctionTemplate = createJunctionTemplate({
  children: {
    '/': createPageTemplate({
      title: 'Junctions',
      component: MarkdownWrapper,
      getContent: () =>
        import('!babel-loader!mdx-loader!./content/index.md'),
    }),

    '/api-reference': createPageTemplate({
      title: 'Junctions API Reference',
      component: MarkdownWrapper,
      getContent: () =>
        import('!babel-loader!mdx-loader!./content/api-reference.md'),
    }),
  },

  component: App,
})
