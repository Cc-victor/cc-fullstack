import { CHANGE_ARTIST,CHANGE_SONG_OF_ARTIST,CHANGE_ENTER_LOADING} from './constants'
import { fromJS } from 'immutable'
import { getSingerInfoRequest } from ''


export const changeArtist = (data) => ({
    type:CHANGE_ARTIST,
    data:fromJS(data)
})
export const changeSongs = (data) => ({
    type:CHANGE_SONG_OF_ARTIST,
    data
})
export const changeLoading = (data) => ({
    type:CHANGE_ENTER_LOADING,
    data
})
export const getSingerInfo =(id) => {
  return dispatch =>{
      getSingerInfoRequest(id)
       .then(data=>{
           dispatch(changeArtist(data.artist))
           dispatch(changeSongs(data.hotSongs))
           dispatch(changeLoading(false))

       })
  }
}