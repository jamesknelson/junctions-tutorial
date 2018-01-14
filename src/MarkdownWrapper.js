import React from 'react'
import { Link } from 'react-junctions'

function createHeadingFactory(type) {
  return (props, ...children) => {
    return React.createElement(
      type,
      props,
      ...children,
      // Append a hash link to each heading, which will be hidden via
      // CSS until he mouse hovers over the heading.
      <Link className='heading-link' href={'#'+props.id}>#</Link>
    )
  }
}

export class MarkdownWrapper extends React.Component {
  factories = {
    a: (props, ...children) =>
      React.createElement(Link, props, ...children),

    h1: createHeadingFactory('h1'),
    h2: createHeadingFactory('h2'),
    h3: createHeadingFactory('h3'),
  }
 
  render() {
    let page = this.props.page
    return (
      <div className='MarkdownWrapper'>
        { page.contentStatus === 'busy' &&
          <div className='page-loading' />
        }
        { page.contentStatus === 'ready' &&
          <div className='page-ready'>
            {React.createElement(page.content.default, {
              factories: this.factories,
              page: page,
            })}
          </div>
        }
        { page.contentStatus === 'error' &&
          <div className='page-error'>
            <h1>Gosh darn it.</h1>
          </div>
        }
      </div>
    )
  }
}