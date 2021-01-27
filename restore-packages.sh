rm -rf **/**/node_modules
cp -r aula02 aula03


for item in $(ls); do
  echo $item
  cd $item
  npm ci --silent
  cd ..
done
