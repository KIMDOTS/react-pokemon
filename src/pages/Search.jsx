import { useSearchParams } from 'react-router-dom'
import { getRegExp } from 'korean-regexp';
import { useSelector } from 'react-redux';
import { selectPokemonByRegExp } from '../RTK/selector';
import { Card } from '../component/Card';

export default function Search() {
  const [searchParams] =useSearchParams()
  const param = searchParams.get('pokemon')

  // 검색어와 일치하는 것을 찾아주는 정규식 생성
  const reg = getRegExp(param)

  const pokemon = useSelector(selectPokemonByRegExp(reg))
  console.log(pokemon)
  return (
    <>
      {pokemon.map(el => <Card key={el.id} pokemon={el} />)}
    </>
  )
}