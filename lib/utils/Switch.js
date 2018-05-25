exports default function Switch(mapping) {
  return function (state) {
    return mapping[state]()
  }
}
