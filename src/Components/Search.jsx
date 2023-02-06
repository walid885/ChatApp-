import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="searchform">
      <input type="text" placeholder='find a user '/>
            </div>

        <div className='userChat'>
        <img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">

</img>
      <div className="userchatinfo">
        <span>Jane</span>
      </div>

        </div>
    </div>
  )
}

export default Search