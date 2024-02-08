## _Semantic versioning_

- In semantic versioning (semver), a version number is comprised of three parts: MAJOR.MINOR.PATCH.

- Major, minor, and patch versions are components of semantic versioning, a widely-used versioning scheme for software libraries, frameworks, and applications.

- Semantic versioning (often abbreviated as SemVer) provides a standardized way to communicate changes and compatibility for software releases.

## _Symbols_

- **" ~ "** : The tilde symbol restricts updates to only the PATCH version.

```
For example, if you specify "~1.2.3", it would match any version from 1.2.3 up to, but not including, 1.3.0.
```

---

- **" ^ "** : The caret symbol restricts updates to the PATCH and MINOR version.

```
for example, consider 4.18.2
If version 4.18.3 is released, it would match.
If version 4.19.0 is released, it would match.
```

---

- **" >= "** : symbol is used to specify a minimum version constraint for a dependency

```
For example, if you specify >=1.2.3, it means that any version of the software package that is version 1.2.3 or higher is acceptable
```

---

- **" - "** : A hyphen between two version numbers, like "1.2.3 - 1.2.5", specifies a range of versions, including both the start and end versions.

---

- **" logical AND : && "** : logical AND operator is used to specify multiple conditions that must all be met.

```
For example, you might use ">=1.2.3 && <2.0.0" to match versions greater than or equal to 1.2.3 but less than 2.0.0.
```

---

- **"logical OR ( || )"** : logical OR operator is used to specify multiple conditions in which only any one of that is necessary to meet.

```
For example, you might use ">=1.2.3 || <2.0.0" to match versions greater than or equal to 1.2.3 or less than 2.0.0.
```

---

- **" \* "** : This allows any version to be installed. This is often used when you want to allow any version, regardless of its specific number.

---
