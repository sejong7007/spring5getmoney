package com.getmoney5.web.cmm;
@FunctionalInterface
public interface IPredicate<T> {
	public boolean test(T t);
}
