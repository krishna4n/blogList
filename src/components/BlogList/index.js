import './index.css'
import BlogItem from '../BlogItem'

const BlogsList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-container">
      {blogsList.map(eachBlog => (
        <BlogItem blog={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogsList
